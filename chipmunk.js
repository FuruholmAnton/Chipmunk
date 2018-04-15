/**
 * A simple template rendering function
 * 
 * @param {*} ref - Either a DOM reference or a string class or ID selector or a HTML string
 * @param {*} data - An object containing the values to replace with
 * @return new HTML string with replaced values
 */
export default function render(ref, data) {
    let tplString;

    // Get the element if ref is a string selector
    // Stores the HTML as a string
    if (typeof ref == 'string') {
        const firstChar = ref.slice(0,1);
        if (firstChar == '.' || firstChar == '#') {
            ref = document.querySelector(ref);
        } else {
            tplString = ref;
        }
    } 
    if (!tplString) tplString = ref.innerHTML

    // Replaces all instances of brackets with coresponding value in the data object and then return
    return tplString.replace(/\{{(.*?)\}}/g, (match) => {
        let v = data;
        // Remove brackets and Trim whitespace
        match.slice(2, match.length - 2)
            .trim()
            .split('.')
            .forEach(n => {
                if (n) v = v[n];
            });

        // Replacing with value or empty string if nonexistant
        return v || '';
    });
}