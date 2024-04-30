import render from '../chipmunk';

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
})
document.body.innerHTML += newHTML;