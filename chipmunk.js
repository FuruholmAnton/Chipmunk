/**
 * A simple template rendering function
 * 
 * @param {*} ref - Either a DOM reference or a string selector
 * @param {*} data - An object containing the values to replace with
 * @return new HTML string with replaced values
 */
export default function render(ref, data) {
    // Get the element if ref is a string
    if (typeof ref == 'string') ref = document.querySelector(ref);

    // Stores the HTML as a string
    let tplString = ref.innerHTML;

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