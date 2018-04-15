function render(ref, data) {
    if (typeof ref == 'string') ref = document.querySelector(ref);
    let tplString = ref.innerHTML;
    return tplString.replace(/\{{(.*?)\}}/g, (match) => {
        let v = data;
        // Remove brackets and Trim whitespace
        match.slice(2, match.length - 2)
            .trim()
            .split('.')
            .forEach(n => {
                if (n) v = v[n];
            });

        return v || '';
    });
}

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