import ElevulMeu from "../utilizator/profesor/eleviimei/inscris/ElevulMeu";

const ElevulMeuList = ({ eleviInscrisi, userData, onSelectElev }) => {


    return (
        <div className="elevul-meu-list">
            {eleviInscrisi.map((elev) => (
                <ElevulMeu key={elev.id_elev} elev={elev} userData={userData} onSelectElev={onSelectElev} />
            ))}
        </div>
    );
};

export default ElevulMeuList;