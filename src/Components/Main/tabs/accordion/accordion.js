import "../accordion/accordian.css";
import Link from "@mui/material/Link";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function AccordionTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      className="mobile-accordian"
      defaultExpanded={false} // Set to false to keep the Accordion closed initially
      expanded={expanded}
      onChange={handleAccordionChange}
    >
      <AccordionSummary>
        <div className="accordian-tab-buttons-bar">
          <div
            className="tab-buttons"
            style={{ width: "70%", marginInline: "auto" }}
          >
            <Link
              onClick={() => handleTabChange(0)}
              className={activeTab === 0 ? "active-link" : ""}
            >
              Mountain 1
            </Link>

            <Link
              onClick={() => handleTabChange(1)}
              className={activeTab === 1 ? "active-link" : ""}
            >
              Mountain 2
            </Link>
          </div>
        </div>
      </AccordionSummary>
      <div className="accordian-bgimg-section">
        {activeTab === 0 && (
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
        )}
        {activeTab === 1 && (
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
        )}
      </div>
    </Accordion>
  );
}

export default AccordionTabs;
