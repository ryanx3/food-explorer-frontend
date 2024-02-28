import { Container } from "./styles";
import { Button } from "../Button";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Error404() {
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    return (
        <Container>
            <FaExclamationTriangle className="icon" />
            <div className="error">
                <h1>Oops! Parece que você se perdeu no ciberespaço.</h1>
                <p>Nossa equipe de astronautas digitais está trabalhando duro para recuperar esta página.</p>
            </div>
            <Button 
            title={"Voltar à Terra"}
            onClick={handleBack}
            />
        </Container>
    );
}