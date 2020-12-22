import React from "react";
import {ButtonPB} from "../../components/ButtonGreenBlack/ButtonGreenBlack.styled";
import {Formik} from "formik";
import {ValidationForm} from "./ValidationForm";
import InputField from "../../components/FieldInput/FieldInput";
import {
    FormContainer,
    TitleStyled,
    FormStyled,
    InputContainer,
    ButtonContainer,
    FormBackground,

} from "./Checkout.styled";
import {clearCart} from "../../redux/shop/shop-actions";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {connect} from "react-redux";
import axios from "axios";
import {HeroBackground} from "../MainSection/Main.styled";

const Checkout = ({clearCart}) => {
    const select = useSelector((state) => state);
    const history = useHistory();
    const url = "http://localhost:3000/gemstones/";
    return (

        <FormContainer>
            <FormBackground>
                <img src="/images/fon-zelenyi-podsvetka-kamen.jpg" alt=""/>
            </FormBackground>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    address: "",
                    cardNumber: "",
                    cvv2: "",
                }}
                validationSchema={ValidationForm}
                onSubmit={(order) => {
                    history.push("checkout/success");
                    order.products = select.shop.gemstonesProducts;
                    select.shop.gemstonesProducts.forEach((gem) => {
                        axios.delete(url + gem.id);
                    });
                    /* post order into new database for shipping to client...*/
                    console.log(order);
                    clearCart();
                }}
            >
                {({handleSubmit}) => (
                    <FormStyled onSubmit={handleSubmit}>
                        <InputContainer>
                            <InputField title="First Name" name="firstName" type="text"/>
                            <InputField title="Last Name" name="lastName" type="text"/>
                            <InputField title="Email" name="email" type="email"/>
                            <InputField title="Phone Number" name="phoneNumber" type="text"/>
                            <InputField title="Address" name="address" type="text"/>
                            <InputField title="Card Number" name="cardNumber" type="text"/>
                            <InputField title="cvv2/cvc2" name="cvv2" type="text"/>
                        </InputContainer>
                        <ButtonContainer>
                            <ButtonPB onClick={handleSubmit} to="success">
                                Let`s buy
                            </ButtonPB>
                        </ButtonContainer>
                    </FormStyled>
                )}
            </Formik>
        </FormContainer>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
};
export default connect(null, mapDispatchToProps)(Checkout);
