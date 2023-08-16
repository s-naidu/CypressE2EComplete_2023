///<reference types='cypress'/>
describe('FInding brokem links in a web page', () => {

    it('FindBrokenLinksTest', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        let brokenLinks = 0
        let actualLinks = 0
        cy.get('a').each(($link, index) => {
            const href = $link.attr('href')
            if (href) {
                cy.request({ url: href, failOnStatusCode: false }).then((res) => {
                    if (res.status >= 400) {
                        cy.log(`*** link ${index + 1}is Broken Link ${href} ****`)
                        brokenLinks++
                    }
                    else {
                        cy.log(`*** link ${index + 1}is Active Link ****`)
                        actualLinks++
                    }

                })

            }
        }).then(($links) => {
            const totalLinks = $links.length
            cy.log(`*** total links *** ${totalLinks}`)
            cy.log(`*** broken links *** ${brokenLinks}`)
            cy.log(`*** active links *** ${actualLinks}`)
        })
    })
})