exports.pagination = (page, postPerPage, numberOfPosts) => {
    // let offset = (page - 1) * postPerPage;
    let previousPage = page - 1
    let nextPage = page + 1;
    let hasNextPage = postPerPage * page < numberOfPosts;
    let hasPreviousPage = page > 1;
    let lastPage = Math.ceil(numberOfPosts / postPerPage);
    return {
        currentPage: page,
        nextPage,
        previousPage,
        hasNextPage,
        hasPreviousPage,
        lastPage
    }
}