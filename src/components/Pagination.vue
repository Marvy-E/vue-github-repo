<template>
    <div class="pagination">
      <button :disabled="currentPageIndex === 0" @click="changePage(currentPageIndex - 1)">Previous</button>
      <button v-for="(page, index) in totalPages" :key="index" :class="{ active: index === currentPageIndex }" @click="changePage(index)">{{ page }}</button>
      <button :disabled="currentPageIndex === totalPages - 1" @click="changePage(currentPageIndex + 1)">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      total: {
        type: Number,
        required: true,
      },
      perPage: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        currentPageIndex: 0,
      }
    },
    computed: {
      currentPage() {
        return this.currentPageIndex + 1;
      },
      totalPages() {
        return Math.ceil(this.total / this.perPage);
      },
    },
    methods: {
      changePage(pageIndex) {
        this.currentPageIndex = pageIndex;
        this.$emit('change', this.currentPage);
      },
    },
  };
  </script>
  
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  
  .pagination button {
    background-color: transparent;
    border: 1px solid #333;
    color: #333;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  
  .pagination button:hover {
    background-color: #333;
    color: #fff;
  }
  
  .pagination button.active {
    background-color: #333;
    color: #fff;
    border-color: #333;
  }
  </style>
  