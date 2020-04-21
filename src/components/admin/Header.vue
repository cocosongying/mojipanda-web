<template>
  <!-- Main Header -->
  <header class="main-header">
    <Logo />
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <MessagesMenu />
          <NotificationsMenu />
          <TasksMenu />
          <UserAccountMenu />
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar">
              <i class="fa fa-gears"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from "@/components/admin/header/Logo.vue";
import MessagesMenu from "@/components/admin/header/MessagesMenu.vue";
import NotificationsMenu from "@/components/admin/header/NotificationsMenu.vue";
import TasksMenu from "@/components/admin/header/TasksMenu.vue";
import UserAccountMenu from "@/components/admin/header/UserAccountMenu.vue";
export default {
  components: {
    Logo,
    MessagesMenu,
    NotificationsMenu,
    TasksMenu,
    UserAccountMenu
  }
};
</script>
