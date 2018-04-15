# Chipmunk
Super simple template renderer

install: 
```
npm i chipmunk-template
```
or
```
yarn add chipmunk-template
```

Example: <https://furuholmanton.github.io/Chipmunk/>

---
## Usage
```HTML
<template id="tpl">
    <div class="div">
        <p>{{ text }}</p>
        <span>{{ span }}</span>
    </div>
    <p>{{ obj.complex }} {{ obj.nest.as.deep.as.you.want }}</p>
</template>
```
```JavaScript
import render from 'chipmunk-template';

const data = {
    text: 'Success!',
    span: 'This text is rendered by JS.',
    obj: {
        complex: 'Nesting also ',
        nest: {
            as: {
                deep: {
                    as: {
                        you: {
                            want: 'works',
                        }
                    }
                }
            }
        }
    }
}

const newHTML = render('#tpl', data);
document.body.innerHTML += newHTML;
```

Other possibilities

```JavaScript
const newHTML = render(`
    <div class="div">
        <p>{{ text }}</p>
        <span>{{ span }}</span>
    </div>
    <p>{{ obj.complex }} {{ obj.nest.as.deep.as.you.want }}</p>
`, data);
```
```JavaScript
const newHTML = render(document.getElementById('tpl'), data);
```