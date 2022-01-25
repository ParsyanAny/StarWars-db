import React, {Component} from "react";
import ItemList from "../item-list";
import Spinner from "../spinner";

const withData = (View, getData) => {
    return class extends Component { 
        state = {
            itemList: null
        }
        componentDidMount() {
            
            getData()
                .then((itemList) => {
                    this.setState({
                        itemList
                    });
                });
        }
        render() {
            const { itemList: data } = this.state;
            if (!data) {
                return <Spinner />;
            }
            return <View {...this.props} data={data} />
        }
    }
}
export default withData;