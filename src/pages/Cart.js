import CartItem from "../components/CartGem/CartGem";

import {connect} from "react-redux";
import {useState} from "react";
import {ButtonPB} from "../components/ButtonGreenBlack/ButtonGreenBlack.styled";
import BackImage from "../icons/fon-zelenyi-podsvetka-kamen.jpg";
import SmaragdImage from "../icons/394-smaragd-artikel-98970688109946_small.jpg";


function Cart({gemstonesProducts}) {
    const [gemstones, setGemstones] = useState(gemstonesProducts);
    return (
        <div
            style={{display: "flex", flexDirection: "column", height: "500px", backgroundImage: `url(${BackImage})`}}

        >

            <ButtonPB
                to="buy"
                style={{
                    width: "219px",
                    alignSelf: "center",
                    marginTop: "1.8rem",
                    marginBottom: "3rem",
                }}
            >
                Buy All Now!
            </ButtonPB>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "left",


                }}
            >
                {gemstonesProducts.map((gem, index) => (
                    <CartItem
                        key={index}
                        image={SmaragdImage}
                        title={gem.name}
                        price={gem.price_in_usd_dollars}
                        weight={gem.weight_in_carats}
                        id={gem.id}
                        currentGemstones={gemstones}
                        setGemstones={setGemstones}

                    />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        gemstonesProducts: state.shop.gemstonesProducts,
    };
};
export default connect(mapStateToProps)(Cart);
