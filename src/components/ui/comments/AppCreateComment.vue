<template>
  <form @submit.prevent="sendComment" class="create-comment">
      <div class="form__control">
        <textarea 
          class="form__textarea"
          v-model="text" 
        ></textarea>
        <small class="form__error" v-if="error">{{error}}</small>
      </div>
      <button 
        :disabled="isTooShort()"
        class="btn primary create-comment__btn"
      >Отправить !</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useField} from 'vee-validate'
import * as yup from 'yup'

export default {
  name:'app-create-comment',
  emits:['sendComment'],
  setup(_,{ emit }){


    const sendComment = () =>{
      emit('sendComment',text.value)
      text.value = ''
    } 

    const MIN_LENGTH = 6
    const {value: text, errorMessage: error, handleBlur: blur} = useField(
      'text',
      yup
        .string()
        .trim()
        .required('Пожалуйста текст')
        .min(MIN_LENGTH, `необходимо ввести больше, чем ${MIN_LENGTH} символов`)
    )


    const isTooShort = () => {
        if(text.value){ 
          return MIN_LENGTH >= text.value.length
        }
        return true
      }
    return{
      sendComment,
      isTooShort,
      text,
      error,
      blur
    }
  }
 
}
</script>

<style>

</style>