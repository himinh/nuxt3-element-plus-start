<script setup lang="ts">
const { facebookLogin, googleLogin } = useFirebase()
</script>

<template>
  <div class="flex justify-center my-4 w-full">
    <el-button class="btn-facebook w-full" @click="facebookLogin">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMtJREFUSEvtlLENwkAMRZ8HgUFgEoaADoaADoYIdCwROhgCBjGydEinKNgJuogUcRfl5Od7+Y4wcMnA/RkXQFVnwBZYAnPgCVxEZP/NROcbpOaPlkaViGxKAHZp+mavYoBrUmOAGliLyCsKSR9F9+Tdeh487zn0V4BNf46mt/cuQFUtLZYcq1PWsAJu6bn2VEWAI7AKJnV1lQC4uiKARXORbmCqbLmsbME+CXLT9N+PnLtX1TymZVI0AcJFmxT1UtTlx9Z2pvOijRbwBrLUYBkni8LYAAAAAElFTkSuQmCC"
      />
      <span>Facebook</span>
    </el-button>

    <el-button class="btn-google w-full" @click="googleLogin">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVBJREFUSEvdVbFRA0EQk4ogA4qADJpwBhQBGRSBMygCQpowGRRhQopYRjN7P3vnvXt+wMMMn7zff7fSanV6Ys8X91wffw9gZucALgDoruvD768AnkiW51SMbgdmdgTgMRTuqbkeAaUAzvplwXzUyU22fgfAmb93im/8f3V37L83JFc9MhmAmBe9y75rks+xiJndATjsMS9rK4CE/RbAam6QIylbALG6DRvWJO8XzGJnaQvwFrTdkjxtd5jZwwygSE3WbQE+w+YeQFyTYVXzGnWQusPM5gAqWUcAIHmQSJSdj+g6maLYuc4i1/dqyZDdrpMxWlJtB2LSMjzp2TSzdWuM7KBFJ00HDYBmMrnDzC49q6KKlTx60YsKdVGiIBaQtjEm4rs0j0ZhJ79nIJk1u3n0K3E9Ou2zXzSPbg3/zOXRHJRR+uBUc/lWXP8kd/4nwBd7CIkZnetNuwAAAABJRU5ErkJggg=="
      />

      <span>Goolge</span>
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.el-button {
  color: #f0f0f0;
  font-size: 14px;
  outline: none;
  border: none;

  > img {
    color: #f0f0f0;
  }
}

.btn-facebook {
  background-color: #395b8e;
}

.btn-google {
  background-color: #ef4534;
}
</style>
