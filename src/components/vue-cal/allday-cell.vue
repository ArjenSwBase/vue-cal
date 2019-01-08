<template lang="pug">
  .vuecal__cell.vuecal__allday_cell(:class="[otherClasses, { [cssClass]: true, 'emptyCell': !event}]" :style="cellStyles")
    .vuecal__cell-content
      .vuecal__event()
</template>

<script>
import { formatTime } from './date-utils'

export default {
  props: {
    cssClass: {
      type: String,
      default: ''
    },
    formattedDate: {
      type: String,
      default: ''
    },
    content: {
      type: [String, Number],
      default: ''
    },
    splits: {
      type: Array,
      default: () => []
    },
    today: {
      type: Boolean,
      default: false
    },
    event: {
      type: Object,
    }
  },
  data: () => ({
    splitEvents: {}
  }),
  filters: {
    formatTime: (value, format) => (value && (formatTime(value, format) || ''))
  },
  methods: {
  },
  computed: {
    cellStyles () {
      return {
        minWidth: `${this.$parent.minCellWidth}px` || null
      }
    },
    otherClasses () {
      if(!this.event){
        return {}
      }

      return {
        cellStart: this.event.part === "start",
        cellMiddle: this.event.part === "middle",
        cellEnd: this.event.part === "end",
        cellComplete: this.event.part === "complete"
      }
    }
  }
}
</script>

<style lang="scss">
  .vuecal__allday_cell{
    height: 20px;
    margin-bottom: 2px;
    width: 100% !important;
  }

  .vuecal__allday_cell:not(.emptyCell){
    background-color: #1e88e5;
    border: 1px solid #0d47a1;

    &.cellStart {
      margin-left: 5px;
      border-right-width: 0;
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;
      width: calc(100% - 5px) !important;
    }

    &.cellEnd {
      border-left-width: 0;
      margin-right: 5px;
      border-bottom-right-radius: 2px;
      border-top-right-radius: 2px;
      width: calc(100% - 5px) !important;
    }

    &.cellMiddle {
      border-left-width: 0;
      border-right-width: 0;
      border-radius: 0;
    }

    &.cellComplete {
      margin-left: 5px;
      margin-right: 5px;
      border-radius: 2px;
      width: calc(100% - 10px) !important;
    }
  }
</style>
