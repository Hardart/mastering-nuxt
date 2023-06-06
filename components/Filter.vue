<template>
  <ul class="py-4 xs:pr-4 mb-4 flex justify-center xs:justify-end gap-3 bg-slate-300 rounded-md dark:bg-slate-800/50">
    <li uk-filter-control class="border-r pr-3 border-gray-400 dark:border-gray-400/30"><a class="sort-btn" href="#">All</a></li>
    <li uk-filter-control="sort: data-sort"><a class="sort-btn" href="#">Asc</a></li>
    <li uk-filter-control="sort: data-sort; order: desc" class="border-r pr-3 border-gray-400 dark:border-gray-400/30"><a class="sort-btn" href="#">Des</a></li>
    <li uk-filter-control="filter: [data-color='light']"><a class="sort-btn" href="#">Light</a></li>
    <li uk-filter-control="filter: [data-color='dark']" class="border-r pr-3 border-gray-400 dark:border-gray-400/30"><a class="sort-btn" href="#">Dark</a></li>
    <li uk-filter-control="sort: data-price"><a class="sort-btn" href="#">Low</a></li>
    <li uk-filter-control="sort: data-price; order: desc"><a class="sort-btn" href="#">Hight</a></li>
  </ul>
</template>

<script setup></script>

<style lang="scss"></style>
