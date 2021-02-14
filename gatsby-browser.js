import "./src/styles/reset.css"
import "./src/styles/global.css"
import "./src/styles/variables.css"

export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    document.body.scrollTo(0, 0)
}