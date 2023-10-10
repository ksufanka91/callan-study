const UniversityDetail = ({university}) => {
    return (
        <div>
            <h1>{university.name} [{university.id}]</h1>
        </div>
    );
};

export default UniversityDetail;