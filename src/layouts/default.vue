<template>
  <div>
    <Header />

    <div class="h-[80px] w-full"></div>

    <div class="max-w-[1140px] mx-auto">
      <div container mx-auto class="min-h-[calc(100vh-252px)]">
        <slot />
      </div>
    </div>

    <Footer />
  </div>
</template>
