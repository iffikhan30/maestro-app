import { Select } from "native-base"

const SortBy = (props) => {
    return (
        <Select
            h={'12'}
            shadow={2} 
            justifyContent="center" 
            flexBasis="46%" 
            mr="1.5"
            mb="1.5" 
            placeholder="Sort By" 
            borderRadius="lg" 
            selectedValue={props.sortValue}
            onValueChange={props.handleSortChange}
            >
            <Select.Item label="Hight to Low" value="price-desc" />
            <Select.Item label="Low to High" value="price-asc" />
        </Select>
    )
}

export default SortBy;