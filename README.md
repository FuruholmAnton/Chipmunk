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

const newHTML = render('#tpl', {
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
});
document.body.innerHTML += newHTML;
```