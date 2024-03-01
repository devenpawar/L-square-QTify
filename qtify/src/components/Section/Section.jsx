import React from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

export default function Section({ title, data, filterSource, type }) {
  const [filters, setFilters] = useState([{ key: "all", label: "ALL" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0  );
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if(filterSource) { 
        filterSource().then((response)=> { 
            const {data} = response; 
            setFilters([...filters, ...data]); 
        })
    }
  }, []);

  const showFilters = filters.length > 1; 
  const cardsToRender = data.filter((card)=> { 
    showFilters && selectedFilterIndex !== 0 ? 
    card.genre.key === filters[selectedFilterIndex].key : card
  })

  console.log(data);

  return (
    <div className={styles.header}>
      <h3>{title}</h3>
      <h4 className={styles.toggleText} onClick={handleToggle}>
        {carouselToggle? "Collapse All" : "Show All"}
      </h4>
    </div>
    {
        showFilter && (
            <div>
            </div>
        )
    }
  );
}
