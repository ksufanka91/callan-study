import universities from "../data/university-data.json";
import filters from "../data/universities-filters.json";
import services from "../data/services.json";
import news from "../data/news.json";
import landing from "../data/landing.json";
import feedback from "../data/feedback.json";
import students from "../data/students.json";
import faq from "../data/faq.json";
import advantages from "../data/advantages.json";
import postsStudents from "../data/postsStudents.json"


const loadHome = () => {
    return {
        landing,
        universities,
        feedback,
        students,
        faq,
        advantages
    }
}

const loadAbout = () => {
    return {
        services
    }
}

const loadServices = () => {
    return {
        services
    }
}

const loadUniversities = () => {
    return {
        universities,
        filters
    }
}

const loadUniversity = (request) => {
    const {id} = request.params;

    const university = universities.find(u => u.id === id);

    return {university};
}

const loadNews = () => {
    return {
        news
    }
}

const loadStudents = () => {
    return {
        postsStudents
    }
}

export {
    loadHome,
    loadUniversities,
    loadUniversity,
    loadAbout,
    loadServices,
    loadNews,
    loadStudents
}