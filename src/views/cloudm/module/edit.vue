<template>
  <a-modal
    title="新建规则"
    :width="640"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <a-form :form="form">
      <a-form-item label="菜单类型" :labelCol="labelCol" :wrapperCol="wrapperCol" >
        <a-input v-decorator="['title', {rules: [{required: true}]}]" />
      </a-form-item>
      <a-form-item label="模块名称" :labelCol="labelCol" :wrapperCol="wrapperCol" >
        <a-input v-decorator="['title', {rules: [{required: true}]}]" />
      </a-form-item>
      <a-form-item label="访问路径" :labelCol="labelCol" :wrapperCol="wrapperCol" >
        <a-input v-decorator="['path', {rules: [{required: true}]}]" />
      </a-form-item>
      <a-form-item label="图标" :labelCol="labelCol" :wrapperCol="wrapperCol" >
        <a-input v-decorator="['iconClass', {rules: [{required: true}]}]" />
      </a-form-item>
      <a-form-item label="排序码" :labelCol="labelCol" :wrapperCol="wrapperCol" >
        <a-input v-decorator="['sortcode', {rules: [{required: true}]}]" />
      </a-form-item>
    </a-form>

  </a-modal>
</template>

<script>
import { axios } from '@/utils/request'

export default {
  data () {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      visible: false,
      confirmLoading: false,
      uiOperateState: 0,
      url: {
        list: 'list',
        add: 'insert',
        edit: 'update',
        view: 'view',
        delete: 'delete'
      },

      form: this.$form.createForm(this)
    }
  },
  methods: {
    add () {
      this.visible = true
      this.uiOperateState = 1
    },
    edit () {
      this.visible = true
      this.uiOperateState = 2
    },
    view () {
      this.visible = true
      this.uiOperateState = 4
    },
    handleSubmit () {
      this.confirmLoading = true
      const { form: { validateFields } } = this
      validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          axios({
            url: '/cloud-module/add',
            method: 'post',
            data: values
          }).then(data => {
            this.confirmLoading = false
            this.visible = false
            this.$emit('ok', data)
          })
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false
    }
  }
}
</script>

<style>

</style>
