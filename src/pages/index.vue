<script setup>
const page = ref(1);
const quote = ref({});
const quotes = ref([]);
const user = ref(false);
const toastMessage = ref("");
const quoteToggled = ref(false);
const loadingQuotes = ref(true);
const { account } = useAppwrite();
const hideToastOnPhone = ref(false);
const runtimeConfig = useRuntimeConfig();
const { database, Query } = useAppwrite();

const openQuote = (quoteItem) => {
  quote.value = quoteItem;
  quoteToggled.value = true;
};

const closeQuote = (e) => {
  quoteToggled.value = false;
};

const showCopiedMessage = (e) => {
  hideToastOnPhone.value = true;
  toastMessage.value = "Copied to clipboard!";
  setTimeout(() => {
    hideToastOnPhone.value = false;
    toastMessage.value = "";
  }, 5000);
};

const toastComingSoon = () => {
  toastMessage.value = "Coming soon!";
  setTimeout(() => {
    toastMessage.value = "";
  }, 5000);
};

const loadQuotes = (moreQuotes) => {
  let filter = [Query.orderAsc("text"), Query.limit(20)];
  if (moreQuotes) {
    const offset = (page.value - 1) * 20;
    filter.push(Query.offset(offset));
  };
  return database.listDocuments(
    runtimeConfig.public.database,
    runtimeConfig.public.quotesTable,
    filter
  );
};

const likeQuote = (quote) => {
  if (!user.value) {
    toastMessage.value = "You must be logged in to like quotes.";
    setTimeout(() => {
      toastMessage.value = "";
    }, 5000);
    return;
  }
  toastComingSoon();
};

const loadMore = async (moreQuotes = true) => {
  if (!moreQuotes && page.value <= 1) return;

  page.value += moreQuotes ? 1 : -1;
  loadingQuotes.value = true;

  try {
    const response = await loadQuotes(moreQuotes);
    if (response.documents.length === 0) {
      page.value -= 1;
      toastMessage.value = "No new quotes available.";
      setTimeout(() => (toastMessage.value = ""), 5000);
    } else {
      quotes.value = response.documents;
    }
  } catch (error) {
    console.error(error);
  } finally {
    loadingQuotes.value = false;
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", page.value.toString());
    window.history.replaceState({}, '', `?${urlParams.toString()}`);
  }
};

onMounted(async () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("page")) {
    page.value = urlParams.get("page");
    urlParams.set("page", parseInt(page.value));
    page.value = parseInt(page.value) - 1;
  }
  loadMore();
  user.value = await account.get();
});

useSeoMeta({
  title: "Success Quotes",
  description:
    "Browse through our motivational list of quotes by many inspiring successful people.",
});
</script>

<template>
  <div class="quotes-container mx-auto p-4">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4">
      <spinners-loading v-show="loadingQuotes" class="col-span-5" />
      <lazy-quotes-preview v-show="!loadingQuotes" :quote="quote_item" v-for="quote_item in quotes"
        :key="quote_item.$id" @open-quote="openQuote" />
    </div>
    <lazy-quotes-view :quote="quote" v-show="quoteToggled" @close-quote="closeQuote" @share-quote="toastComingSoon"
      @author-quotes="toastComingSoon" @quote-copied="showCopiedMessage" @like-quote="likeQuote" />
    <lazy-alerts v-show="toastMessage" :message="toastMessage" />
    <div class="flex items-center justify-center gap-4 mt-4">
      <NuxtLink v-show="!loadingQuotes" class="mb-4 text-sm text-center uppercase font-semibold"
        :class="{ 'opacity-50': page === 1, 'cursor-pointer': page > 1 }" @click.prevent="loadMore(false)">Previous</NuxtLink>
      <NuxtLink v-show="!loadingQuotes && quotes.length > 0"
        class="mb-4 cursor-pointer text-sm text-center uppercase font-semibold" @click.prevent="loadMore">Next Page
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.quotes-container {
  @apply max-w-[1200px];
}

::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-green-50;
}

::-webkit-scrollbar-thumb {
  @apply bg-green-400 hover:bg-green-500 rounded;
}
</style>