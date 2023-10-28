<script setup>
  import { ref } from 'vue';
  import WsApi from '../../api/socket/index';

  const ws = new WsApi({
    openCallback: function(){
      console.log('链接成功');
    },
    msgCallback: function(msg){
      listData.value.push(msg);
    },
  })

  const listData = ref([]);
  const inputVal = ref('');

  function sendData(){
    ws.send(inputVal.value)
    inputVal.value = '';
  }



</script>

<template>
  <div>
    <div class="left-area">
      <input class="mr-12" type="text" v-model="inputVal" />
      <button @click="sendData">发送</button>
    </div>
    <div class="right-area">

      <h3 style="margin-bottom: 16px;">接受到的消息</h3>

      <ol style="margin-left: 20px;">
        <li v-for="(item, idx) in listData" :key="idx">{{ item }}</li>
      </ol>

    </div>
  </div>
</template>


<style scoped>
  .mr-12{
    margin-right: 12px;
  }
  .right-area{
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px solid #ccc;
  }
</style>