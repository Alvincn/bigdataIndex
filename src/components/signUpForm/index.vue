<template>
  <el-form action="#" status-icon ref="ruleFormRef" :model="stuInfo" :rules="rules">
    <el-form-item label="证件照" class="photo" :label-width="formLabelWidth">
      <el-upload accept="image/png,image/jpg,image/jpeg" action="#" :on-change="handlePreview" class="avatar-uploader"
                 :auto-upload="false" :show-file-list="false">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon">
          <Plus />
        </el-icon>
      </el-upload>
    </el-form-item>
    <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
      <el-input v-model="stuInfo.name" autocomplete="off" placeholder="请输入姓名" />
    </el-form-item>
    <el-form-item label="性别" prop="sex" :label-width="formLabelWidth">
      <div class="my-2 flex items-center text-sm">
        <el-radio-group v-model="stuInfo.sex" class="ml-4">
          <el-radio label="1">男</el-radio>
          <el-radio label="0">女</el-radio>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="专业" prop="major" :label-width="formLabelWidth">
      <el-radio-group v-model="stuInfo.major" size="large">
        <el-radio-button label="软件" />
        <el-radio-button label="数媒" />
        <el-radio-button label="计科" />
        <el-radio-button label="智能" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="学号" prop="sno" :label-width="formLabelWidth">
      <el-input v-model="stuInfo.sno" autocomplete="off" placeholder="请输入学号" />
    </el-form-item>
    <el-form-item label="手机号" prop="phone" :label-width="formLabelWidth">
      <el-input v-model="stuInfo.phone" autocomplete="off" placeholder="请输入您的电话号" />
    </el-form-item>
    <el-form-item label="电子邮箱" prop="email" :label-width="formLabelWidth">
      <el-input v-model="stuInfo.email" autocomplete="off" placeholder="请输入邮箱（请核对好邮箱，后续面试通知均会使用邮箱通知）" />
    </el-form-item>
    <el-form-item label="个人标签" prop="personalTags" :label-width="formLabelWidth">
      <el-select v-model="stuInfo.personalTags" style="width: 100%;" multiple filterable allow-create
                 default-first-option :reserve-keyword="false" placeholder="个人标签可以让我们更了解你（也可以手动输入创建标签）">
        <el-option-group v-for="group in personalTags" :key="group.label" :label="group.label">
          <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
        </el-option-group>
      </el-select>
    </el-form-item>
    <el-form-item label="自我介绍" prop="selfEvaluation" :label-width="formLabelWidth">
      <el-input maxlength="200" minlength="50" show-word-limit :autosize="{ maxRows: 6, minRows: 2 }"
                v-model="stuInfo.selfEvaluation" :rows="2" type="textarea" placeholder="好好介绍一下自己叭" />
    </el-form-item>
    <el-form-item label="是否加入学团" prop="studyGroup" :label-width="formLabelWidth">
      <el-row>
        <el-col :span="12">
          <el-switch v-model="stuInfo.studyGroup" inline-prompt active-text="是" inactive-text="否" />
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item v-if="stuInfo.studyGroup" label="是否加入学团" prop="studyGroup" :label-width="formLabelWidth">
      <el-input v-model="stuInfo.groupPosition" placeholder="学团名称" />
    </el-form-item>
    <el-form-item label="班级职务" prop="classPosition" :label-width="formLabelWidth">
      <el-input v-model="stuInfo.classPosition" placeholder="班级职务（没有则不填）" />
    </el-form-item>
    <el-form-item :label-width="formLabelWidth">
      <el-popconfirm title="确认提交吗?" @confirm="submitForm(ruleFormRef)">
        <template #reference>
          <el-button type="primary" :loading="isLoading">提交</el-button>
        </template>
      </el-popconfirm>
      <el-button @click="$emit('disShow')">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import {  reactive, ref } from "vue";
const formLabelWidth = '140px'
import { signIn } from '@/api'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
const $emit = defineEmits(['disShow','success'])
const ruleFormRef = ref<FormInstance>()
import {Plus} from '@element-plus/icons-vue'
interface RuleForm {
  name: string,
  sex: 'man' | 'woman',
  phone: string,
  email: string,
  major: string,
  sno: string,
  personalTags: string,
  selfEvaluation: string,
  studyGroup: boolean,
  groupPosition: string,
  classPosition: string,
  status: 0
}
const imageUrl = ref(null)
const photo = ref(null)
const isLoading = ref(false)
// 个人标签
const personalTags = [
  {
    label: '技术方面',
    options: [
      {
        value: '热爱技术',
        label: '热爱技术'
      },
      {
        value: '感觉技术很帅',
        label: '感觉技术很帅'
      },
      {
        value: '学校课程很有意思',
        label: '学校课程很有意思',
      }
    ]
  },
  {
    label: '性格方面',
    options: [
      {
        value: '内向',
        label: '内向'
      },
      {
        value: '开朗',
        label: '开朗'
      },
      {
        value: '内向但开朗',
        label: '虽然内向但是和朋友很开朗'
      },
      {
        value: '勤奋',
        label: '为了技术我可以静下心去学'
      }
    ]
  },
  {
    label: '兴趣方面',
    options: [
      {
        label: "唱",
        value: '唱'
      },
      {
        label: "跳",
        value: '跳'
      },
      {
        label: "rap",
        value: 'rap'
      },
      {
        label: '篮球',
        value: '篮球'
      },
      {
        label: '听歌',
        value: '听歌'
      },
      {
        label: '看书',
        value: '看书'
      },
      {
        label: '玩游戏',
        value: '玩游戏'
      }
    ]
  }
]
/**
 * 学生信息
 */
const stuInfo = reactive({
  name: "",
  sex: "",
  phone: "",
  email: "",
  major: "",
  sno: "",
  personalTags: "",
  selfEvaluation: "",
  studyGroup: false,
  groupPosition: null,
  classPosition: null,
})
/**
 * 邮箱验证
 * @param rule
 * @param value
 * @param callback
 */
const emailValidate = (rule: any, value: any, callback: any) => {
  // 验证邮箱的正则表达式
  const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  if (value === '') {
    callback(new Error('请输入邮箱'))
  }
  if (!reg.test(value)) {
    callback(new Error('请输入正确的邮箱'))
  }
  callback();
}
/**
 * 验证规则
 */
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 10, message: '姓名长度应该大于2', trigger: 'blur' }
  ],
  sex: [
    { required: true, message: '请选择性别', trigger: 'blur' }
  ],
  sno: [
    { required: true, message: "请输入学号", trigger: 'blur' },
    { len: 12, message: '请输入12位学号', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入电话号', trigger: 'blur' },
    { len: 11, message: '请输入11位手机号', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { validator: emailValidate, trigger: 'blur' },
  ],
  selfEvaluation: [
    { required: true, message: '请介绍一下你自己', trigger: 'blur' },
    { min: 50, max: 200, message: '请好好介绍一下你自己哦，这样我们才能更了解你', trigger: 'blur' }
  ],
  major: [
    { required: true, message: '请选择专业', trigger: 'blur' }
  ]
})
/**
 * 上传头像
 */
const fileUpload = () => {
  const Form = new FormData()
  console.log(photo);
  Form.append('photo', photo.value)
  for (let i in stuInfo) {
    if (i === 'personalTags') {
      Form.append(i, (stuInfo[i] as unknown as string[]).join(' '))
    } else {
      Form.append(i, stuInfo[i])
    }
  }
  console.log(Form.get('photo'));
  return Form
}
/**
 * 提交表单
 */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      if (!imageUrl.value) {
        ElMessage({
          message: '记得上传图片哦',
          type: 'warning',
        })
        return false
      }
      const data = fileUpload()
      isLoading.value = true
      signIn(data).then((res:any) => {
        if (res.code === 1) {
          ElMessage({
            message: res.message,
            type: 'warning'
          })
        } else {
          ElMessage({
            message: '报名成功，后续过程我们将会通过邮箱联系您！',
            type: 'success',
          })
          window.localStorage.setItem('stuInfo',JSON.stringify(stuInfo))
          $emit('success',stuInfo)
        }
        isLoading.value = false
      })
    } else {
      ElMessage({
        message: '要好好检查是否有填错哦。',
        type: 'warning',
      })
      return false
    }
  })
}
/**
 * 照片预览
 */
const handlePreview = (UploadFile) => {
  imageUrl.value = URL.createObjectURL(UploadFile.raw)
  photo.value = UploadFile.raw
}
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 150px;
  text-align: center;
}

.photo::before {
  content: "*";
  color: var(--el-color-danger);
  margin-right: 4px;
  position: relative;
  right: -85px;
  top: 10px;
}
</style>

<style scoped>
.avatar-uploader .avatar {
  width: 100px;
  height: 150px;
  display: block;
}
</style>

