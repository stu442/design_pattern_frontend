export default function useDogImages() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/labrador/images/random/6')
            .then(res => res.json())
            .then(data => setDogs(data.message))
    }, [])

    return dogs;
}