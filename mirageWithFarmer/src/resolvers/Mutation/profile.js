const {
    getUserId
} = require('../../utils')


const profile = {

    /** Example from post.js
     * 
        async createDraft(parent, {
            title,
            text
        }, ctx, info) {
            const userId = getUserId(ctx)
            return ctx.db.mutation.createPost({
                    data: {
                        title,
                        text,
                        isPublished: false,
                        author: {
                            connect: {
                                id: userId
                            },
                        },
                    },
                },
                info
            )
        },
     */
    async createAddress(parent, {
        line1,
        line2,
        line3,
        area,
        postalCode,
        province,
    }, ctx, info) {
        const userId = getUserId(ctx)
        return ctx.db.mutation.createAddress({
                data: {
                    line1,
                    line2,
                    line3,
                    area,
                    postalCode,
                    province,
                    resident: {
                        connect: {
                            id: userId
                        },
                    },
                },
            },
            info
        )
    },
    async createPersonalDetails(parent, {
        lastName,
        cellNo,
        landLine,
        idSA,
    }, ctx, info) {
        const userId = getUserId(ctx)
        return ctx.db.mutation.createPersonalDetails({
                data: {
                    lastName,
                    cellNo,
                    landLine,
                    idSA,
                    person: {
                        connect: {
                            id: userId
                        },
                    },
                },
            },
            info
        )
    },
    async createFarmingActivities(parent, {
        category,
        shortDescription,
        longDescription,

    }, ctx, info) {
        const userId = getUserId(ctx)
        return ctx.db.mutation.createFarmingActivities({
                data: {
                    category,
                    shortDescription,
                    longDescription,
                    farmer: {
                        connect: {
                            id: userId
                        },
                    },
                },
            },
            info
        )
    },



}

module.exports = {
    profile
}