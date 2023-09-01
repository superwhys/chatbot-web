<template>
  <div class="side-bar">
    <div
      class="side-header"
      :class="{ 'side-header-center': isParentWidthLessThanThreshold() }"
    >
      <div class="header-title" :class="{ 'title-hidden': isTitleHidden() }">
        ChatBot Web
      </div>
      <div
        class="header-sub-title"
        :class="{ 'title-hidden': isTitleHidden() }"
      >
        Build your own AI assistant.
      </div>
      <div class="side-logo" :class="{ 'side-logo-center': isLogoCenter() }">
        <img :src="sideLogo" alt="SVG Image" />
      </div>
    </div>
    <div class="side-body">
      <chat-list-item
        v-for="(item, index) in chatHistory"
        :key="index"
        :title="item.title"
        :chatCount="item.chatCount"
        :chatTime="item.chatTime"
        :class="{ 'item-active': activeItem === index }"
        @click.native="activeFun(index)"
      ></chat-list-item>
    </div>
    <div
      class="side-tail"
      :class="{ 'tail-action-center': isTailActionCenter() }"
    >
      <div class="side-tail-action">
        <div class="side-action-setting">
          <button
            class="side-btn button-shadow"
            :class="{ 'side-tail-item-width': isTailWidthLessThanThreshold() }"
            role="button"
          >
            <img class="icon-brightness" :src="settingLogo" alt="setting" />
            <div
              class="side-setting-text hidden-side-tail-action-text"
              :class="{
                'show-side-tail-action-text': isShowTailActionText(false),
              }"
            >
              设置
            </div>
          </button>
        </div>
      </div>
      <div class="side-tail-action">
        <button
          class="side-btn button-shadow"
          :class="{ 'side-tail-item-width': isTailWidthLessThanThreshold() }"
          role="button"
        >
          <img
            class="side-add-icon icon-brightness"
            :src="addChatLogo"
            alt="addChat"
          />
          <div
            class="side-add-text hidden-side-tail-action-text"
            :class="{
              'show-side-tail-action-text': isShowTailActionText(true),
            }"
          >
            新的聊天
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ChatListItem from "@/components/chatListItem.vue";

export default {
  name: "sidebarPage",
  components: { ChatListItem },
  props: {
    parentWidth: {
      type: String,
    },
  },
  data() {
    return {
      startX: 0,
      commonThreshold: 265,
      tailThreshold: 190,
      tailActionTextDisplayThreshold: 130,
      activeItem: 0,
      chatHistory: [
        {
          title: "聊天1",
          chatCount: 0,
          chatTime: "2021/01/02 00:00:00",
        },
        {
          title: "新的聊天",
          chatCount: 10,
          chatTime: "2021/01/03 00:00:00",
        },
        {
          title: "新的聊天2",
          chatCount: 6,
          chatTime: "2021/01/04 00:00:00",
        },
        {
          title: "聊天3",
          chatCount: 3,
          chatTime: "2021/01/05 00:00:00",
        },
      ],
      isDragging: false,
      settingLogo: require("@/assets/settings.svg"),
      addChatLogo: require("@/assets/add.svg"),
      sideLogo: require("@/assets/chatgpt.svg"),
    };
  },
  methods: {
    activeFun(index) {
      this.activeItem = index;
    },
    parseParentWidth() {
      console.log(this.parentWidth);
      let pWidth = this.parentWidth.replace("px", "");
      return parseInt(pWidth);
    },
    isParentWidthLessThanSpecifyWidth(specifyWidth) {
      return this.parseParentWidth() < specifyWidth;
    },
    isParentWidthLessThanThreshold() {
      return this.isParentWidthLessThanSpecifyWidth(this.commonThreshold);
    },
    isTailActionCenter() {
      return this.isParentWidthLessThanSpecifyWidth(this.tailThreshold);
    },
    isTailWidthLessThanThreshold() {
      if (
        this.isParentWidthLessThanSpecifyWidth(
          this.tailActionTextDisplayThreshold
        )
      ) {
        return false;
      }
      return this.isParentWidthLessThanSpecifyWidth(this.tailThreshold);
    },
    isShowTailActionText(initialize) {
      // 当父元素宽度小于tailThreshold时，所有tailItem都显示文字
      // 当大于tailThreshold时，为初始状态，利用initialize控制
      // 当父元素宽度小于tailActionTextDisplayThreshold时，所有tailItem都不显示文字
      if (
        this.isParentWidthLessThanSpecifyWidth(
          this.tailActionTextDisplayThreshold
        )
      ) {
        return false;
      }

      if (this.isParentWidthLessThanSpecifyWidth(this.tailThreshold)) {
        return true;
      }
      return initialize;
    },
    isLogoCenter() {
      return !!this.isParentWidthLessThanThreshold();
    },
    isTitleHidden() {
      return !!this.isParentWidthLessThanThreshold();
    },
  },
};
</script>

<style scoped>
.side-bar {
  background-color: rgb(27 38 42);
  top: 0;
  width: 100%;
  height: 90vh;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: inset -2px 0 2px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  transition: width ease 0.05s;
}

.side-header {
  display: flex;
  position: relative;
  padding: 20px 0;
  align-items: flex-start;
  flex-direction: column;
}

.header-title {
  display: flex;
  font-size: 27px;
  font-weight: bold;
}

.header-sub-title {
  display: flex;
  font-size: 12px;
  font-weight: 400;
}

.side-logo {
  position: absolute;
  right: 0;
  bottom: 18px;
}

.side-body {
  flex: 1 1;
  overflow: auto;
  overflow-x: hidden;
}

.item-active {
  border: 2px solid var(--primary);
}

.side-tail {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}

.side-tail-action {
  display: inline-flex;
  margin-bottom: 10px;
}

.button-shadow {
  box-shadow: var(--card-shadow);
}

.side-btn {
  background-color: var(--black);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  outline: none;
  border: none;
  color: var(--white);
}

.icon-brightness {
  filter: brightness(2);
}

.side-add-icon {
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.side-add-text {
  margin-left: 5px;
}

.side-setting-text {
  margin-left: 5px;
}

.hidden-side-tail-action-text {
  display: none;
}

.show-side-tail-action-text {
  display: inline-flex;
}

.side-action-setting {
  /*margin-right: 15px;*/
}

/*响应式，side bar缩小后的样式*/

.side-logo-center {
  position: relative;
  display: flex;
  justify-content: center;
}

.side-header-center {
  align-items: center;
}

.title-hidden {
  display: none;
}

.tail-action-center {
  flex-direction: column-reverse;
  align-items: center;
}

.side-tail-item-width {
  width: 95px;
  height: 40px;
}
</style>
