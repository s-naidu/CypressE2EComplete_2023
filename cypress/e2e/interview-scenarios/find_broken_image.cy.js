///<reference types='cypress'/>

describe('Finding the broken images', () => {

    it('find broken image test', () => {
        let brokenimage = 0
        let actualimage = 0
        cy.visit('https://the-internet.herokuapp.com/broken_images')
                cy.get('img').each(($link, index) => {
        const href = $link.attr('src')
        if (href) {
            cy.request({ url: href, failOnStatusCode: false }).then((res) => {
                if (res.status >= 400) {
                    cy.log(`*** link ${index + 1}is Broken Image ${href} ****`)
                    brokenimage++
                }
                else {
                    cy.log(`*** link ${index + 1}is Active Image ****`)
                    actualimage++
                }

            })

        }
        }).then(($links) => {
            const totalimages = $links.length
            cy.log(`*** total Images *** ${totalimages}`)
            cy.log(`*** broken Image *** ${brokenimage}`)
            cy.log(`*** active Image *** ${actualimage}`)
        })
    })

})

