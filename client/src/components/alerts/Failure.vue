<template>
  <div class="">
    <div class="mbg-3 alert alert-info alert-dismissible fade show" role="alert">
                        <span class="pr-2">
                            <i class="fa fa-question-circle"></i>
                        </span>
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'failure',
    data () {
      return {
        message: 'Success'
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>
