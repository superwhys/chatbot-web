<template>
  <div class="chat-item">
    <div class="chat-item-title">
      <span>{{ title }}</span>
    </div>
    <div class="chat-info">
      <div class="chat-item-count">
        <span>{{ chatCount }}条对话</span>
      </div>
      <div class="chat-item-time">
        <span>{{ currentTime }}</span>
      </div>
    </div>
    <div class="chat-item-delete">
      <img :src="deleteImgPath" alt="item-delete" />
    </div>
  </div>
</template>

<script>
export default {
  name: "chatListItem",
  data() {
    return {
      deleteImgPath: require("@/assets/delete.svg"),
    };
  },
  computed: {
    currentTime() {
      return this.chatTime;
    },
  },
  props: {
    parentWidth: {
      type: String,
    },
    title: {
      type: String,
      default: "新的聊天",
    },
    chatCount: {
      type: Number,
      default: 0,
    },
    chatTime: {
      type: String,
      default: (function () {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        const hours = String(currentDate.getHours()).padStart(2, "0");
        const minutes = String(currentDate.getMinutes()).padStart(2, "0");
        const seconds = String(currentDate.getSeconds()).padStart(2, "0");
        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
      })(),
    },
  },
};
</script>

<style scoped>
.chat-item {
  padding: 10px 14px;
  background-color: var(--black);
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: var(--card-shadow);
  transition: background-color 0.3s ease;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 2px solid transparent;
  position: relative;
  content-visibility: auto;
  text-align: left;
}

.chat-item-title {
  font-size: 14px;
  font-weight: bolder;
  display: block;
  width: calc(100% - 15px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  animation: home_slide-in__h1Bn_ ease 0.3s;
}

.chat-info {
  display: flex;
  justify-content: space-between;
  color: rgb(166, 166, 166);
  font-size: 12px;
  margin-top: 8px;
  animation: home_slide-in__h1Bn_ ease 0.3s;
}

.chat-item-count {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chat-item-time {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chat-item-delete {
  position: absolute;
  top: 0;
  right: 0;
  transition: all ease 0.3s;
  opacity: 0;
  cursor: pointer;
}

.chat-item:hover .chat-item-delete {
  opacity: 1;
}

.chat-item-delete:hover {
  filter: brightness(1.5);
}
</style>
