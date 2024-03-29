describe("Cohorts", function() {
  beforeEach(function() {
    cy.task('taskTruncateTables')
  })

  it("returns cohorts", function() {
    cy.task('taskCreateCohort')
    cy.request({
      method: "GET",
      url: "api/cohorts"
    }).should(res => {
      expect(res.body.cohorts.length).to.eq(1)
      expect(res.body.cohorts[0].name).to.eq("test cohort")
      expect(res.status).to.eq(200)
    })
  })
})
