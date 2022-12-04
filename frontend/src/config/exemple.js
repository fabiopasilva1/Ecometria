const [dataState, setDataState] = useState([]);
const [filterPage, setFilterPage] = useState();

const location = useParams();
// (location.pageName !== undefined) ? setFilterPage(location.pageName) : setFilterPage('/')
async function ReadAPI() {
    const response = await api.get(`api/navigation/render/1/${filterPage}/`, {
        headers: {
            Authorization: `Bearer ${TOKEN_API}`,
        },
        params: {
            populate: '*'
        }
    });
    setDataState(response.data)
}


useEffect(() => {
    if (location.pageName !== undefined) setFilterPage(location.pageName);
    if (location.pageName === undefined) setFilterPage('home')
}, [])
useEffect(() => {
    if (dataState.length === 0) ReadAPI();
}, [dataState])

///////////////////////////////////////////////
const theContext = useContext(ContentContext);

const [dataSlider, setDataSlider] = useState([])
const [dataFeatures, setDataFeatures] = useState([])
const [dataHighlight, setDataHighlight] = useState([])
//Pegando dados dos components
function getComponent() {
    if (theContext.attributes !== undefined) {
        if (theContext.attributes.Components.length !== 0) {
            // console.log('Tem components')
            theContext.attributes.Components.map(Component => {
                if (Component.slides !== undefined) { setDataSlider(Component.slides) };
                if (Component.Features !== undefined) { setDataFeatures(Component.Features) };
                if (Component.Highlight !== undefined) { setDataHighlight(Component.Highlight) };