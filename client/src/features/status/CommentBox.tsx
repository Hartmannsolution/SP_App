import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

function CommentBox({comment = ""}: { comment: string }) {
    const sanitizedData = DOMPurify.sanitize(comment); // Sanitize the data for preventing XSS attacks
    let copy: string[] = sanitizedData.split(""); // Split the string into an array of characters

    const addStyleToListTypes = (array: string[]) => { // Add style to the list types
        for (let i = 0; i < array.length; i++) {
            const first = array[i]; // '<'
            const second = array[i + 1]; // 'o' || 'u'
            const third = array[i + 2]; // 'l'
            const fourth = array[i + 3]; // '>'
            if (first === '<' && (second === 'o' || second === 'u') && third === 'l' && fourth === '>') {
                if (second === 'o') array[i + 2] = `${array[i + 2]} class="list-decimal list-inside"`
                if (second === 'u') array[i + 2] = `${array[i + 2]} class="list-disc list-inside"`
            }
        }
        return array;
    }

    copy = addStyleToListTypes(copy);

    return (
        <>
            {comment &&
                <div
                    className="ml-2 border-4 self-end w-[345px] border-green-600 text-blue-700 md:w-1/2 bg-blue-50 md:text-lg md:mx-20">
                    <div className="p-4 text-sm md:text-2xl">
                        {parse(copy.join(''))}
                    </div>
                </div>
            }
        </>)
}

export default CommentBox;
