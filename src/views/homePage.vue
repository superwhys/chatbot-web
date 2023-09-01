<template>
  <div class="home-page">
    <el-container class="home-page-container">
      <div class="home-aside">
        <el-aside :width="asideWidth">
          <sidebar-page :parentWidth="asideWidth"></sidebar-page>
          <div class="side-drag" @mousedown="startDrag">
            <img :src="dragLogo" draggable="false" alt="drag" />
          </div>
        </el-aside>
      </div>
      <el-main style="padding: 0" class="home-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SidebarPage from "@/components/sidebarPage.vue";

export default {
  name: "homePage",
  components: { SidebarPage },
  data() {
    return {
      asideWidth: "271px",
      dragLogo: require("@/assets/drag.svg"),
    };
  },
  methods: {
    startDrag() {
      this.isDragging = true;
      document.addEventListener("mousemove", this.handleDrag);
      document.addEventListener("mouseup", this.stopDrag);
    },
    handleDrag(event) {
      if (this.isDragging) {
        const newWidth = event.clientX;
        const minWidth = 100;
        const maxWidth = 450;
        if (newWidth < minWidth || newWidth > maxWidth) return;
        this.asideWidth = newWidth + "px";
      }
    },
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener("mousemove", this.handleDrag);
      document.removeEventListener("mouseup", this.stopDrag);
    },
  },
};
</script>

<style scoped>
.home-page {
  background-color: white;
  background-clip: content-box;
  border: 1px solid;
  border-radius: 20px;
  box-shadow: 50px 50px 100px 10px rgb(0, 0, 0, 0.1);
  min-width: 600px;
  min-height: 480px;
  max-width: 1200px;
  display: flex;
  overflow: hidden;
  width: var(--window-width);
  height: var(--window-height);
  box-sizing: border-box;
}

.home-page-container {
  color: var(--white);
}

.home-aside {
  position: relative;
  /*transition: width 0.3s;*/
}

@media (max-width: 600px) {
  .home-main {
    display: none;
  }
}

.home-main {
  flex: 1 1 auto;
  overflow: hidden;
}

.side-drag {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 14px;
  background-color: rgba(0, 0, 0, 0);
  cursor: ew-resize;
  transition: all ease 0.3s;
  display: flex;
  align-items: center;
}
</style>
