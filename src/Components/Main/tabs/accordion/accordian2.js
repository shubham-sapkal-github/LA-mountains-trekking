import "../accordion/accordian.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Link from "@mui/material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordianSecond() {
  return (
    <>
      <Accordion className="mobile-accordian accordian-bgimg-section accordian-tab-buttons-bar">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="tab-buttons"
          sx={{ width: "70%", marginInline: "auto" }}
        >
          <Link>Mountain 1</Link>
        </AccordionSummary>
        <AccordionDetails>
          <section className="accordian-bgimg-secion">
            <div className="table-container">
              <div
                style={{
                  fontSize: "32px",
                  color: "#414f6b",
                  fontWeight: "700",
                  fontFamily: "Oswald",
                }}
              >
                SCHEDULE
              </div>
              <table class="table table-sm " className="custom-table">
                <tbody>
                  <tr>
                    <td>25 Nov 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: "15px" }}>28 Nov 2016</td>
                    <td style={{ paddingBottom: "15px" }}>
                      Vestibulum viverra
                    </td>
                  </tr>

                  <tr>
                    <td style={{ paddingBottom: "15px" }}>18 Dec 2016</td>
                    <td style={{ paddingBottom: "15px" }}>
                      Vestibulum viverra
                    </td>
                  </tr>
                  <tr>
                    <td>7 Jan 2017</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </AccordionDetails>
      </Accordion>

      <Accordion className="mobile-accordian accordian-bgimg-section accordian-tab-buttons-bar">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="tab-buttons"
          sx={{ width: "70%", marginInline: "auto" }}
        >
          <Link>Mountain 2</Link>
        </AccordionSummary>
        <AccordionDetails>
          <section className="accordian-bgimg-secion">
            <div className="table-container accordian-table-container2">
              <div
                style={{
                  fontSize: "32px",
                  color: "#414f6b",
                  fontWeight: "700",
                  fontFamily: "Oswald",
                }}
              >
                SCHEDULE
              </div>
              <table class="table table-sm " className="custom-table">
                <tbody>
                  <tr>
                    <td>17 Nov 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: "15px" }}>13 Dec 2016</td>
                    <td style={{ paddingBottom: "15px" }}>
                      Vestibulum viverra
                    </td>
                  </tr>

                  <tr>
                    <td style={{ paddingBottom: "15px" }}>28 Dec 2016</td>
                    <td style={{ paddingBottom: "15px" }}>
                      Vestibulum viverra
                    </td>
                  </tr>
                  <tr>
                    <td>9 Feb 2017</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AccordianSecond;
