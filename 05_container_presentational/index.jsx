function DogImage({ dogs }) {
    const dogs = useDogImages();

    return dogs.map((dog, i) => <img key={i} src={dog.image} alt={dog.name} />)
}