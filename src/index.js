export default function delegateEvent(event, selector, fn, context = document) {
    function handler (e) {
        const el = e.target.closest(selector);

        if (el) {
            const result = fn(e, el);

            if (result === false) {
                e.preventDefault();
            }
        }
    }

    context.addEventListener(event, (e) => handler);

    return () => context.removeEventListener(event, handler);
}
