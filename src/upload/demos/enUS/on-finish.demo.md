# Change File on Finish

You can change file's property when upload finishes.

```html
<n-upload
  @finish="handleFinish"
  action="http://www.mocky.io/v2/5e4bafc63100007100d8b70f"
>
  <n-button>Upload</n-button>
</n-upload>
```

```js
import { useMessage } from 'naive-ui'

export default {
  setup() {
    const message = useMessage()
    const handleFinish = ({ file, event }) => {
      message.success(event.target.response)
      file.url = 'http://www.mocky.io/v2/5e4bafc63100007100d8b70f'
    }
    return {
      message,
      handleFinish
    }
  }
}
```
