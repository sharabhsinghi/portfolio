import "../styles/rentals.css";
import { FaShieldAlt } from "react-icons/fa";
import { useState } from "react";

export default function Rentals() {
  const [selectedListing, setSelectedListing] = useState(null);

  // Sample rental listings data
  const listings = [
    {
      id: 1,
      title: "Professional Camera - Canon EOS R5",
      description: "High-end mirrorless camera for professional photography and videography",
      itemValue: 3899.00,
      dailyRate: 150.00,
      category: "Photography",
      hasSecurityService: true,
      insuranceCoverage: true,
      requiresLegalContract: true,
      fairMarketValue: 3899.00,
      securityServiceCost: 49.99
    },
    {
      id: 2,
      title: "Power Drill Set",
      description: "Complete cordless power drill set with multiple bits and accessories",
      itemValue: 250.00,
      dailyRate: 25.00,
      category: "Tools",
      hasSecurityService: false,
      insuranceCoverage: false,
      requiresLegalContract: false
    },
    {
      id: 3,
      title: "DJI Mavic 3 Drone",
      description: "Professional drone with 4K camera and advanced flight features",
      itemValue: 2199.00,
      dailyRate: 120.00,
      category: "Electronics",
      hasSecurityService: true,
      insuranceCoverage: true,
      requiresLegalContract: true,
      fairMarketValue: 2199.00,
      securityServiceCost: 39.99
    },
    {
      id: 4,
      title: "Mountain Bike",
      description: "High-performance mountain bike for trails and outdoor adventures",
      itemValue: 650.00,
      dailyRate: 45.00,
      category: "Sports",
      hasSecurityService: false,
      insuranceCoverage: false,
      requiresLegalContract: false
    },
    {
      id: 5,
      title: "Professional Audio Interface",
      description: "Focusrite Scarlett 18i20 - Studio-grade audio interface",
      itemValue: 549.00,
      dailyRate: 35.00,
      category: "Audio",
      hasSecurityService: true,
      insuranceCoverage: true,
      requiresLegalContract: true,
      fairMarketValue: 549.00,
      securityServiceCost: 29.99
    }
  ];

  const shouldRecommendSecurity = (listing) => {
    return listing.itemValue > 500 && !listing.hasSecurityService;
  };

  return (
    <section className="rentals fade-in">
      <h2>Rental Marketplace Demo</h2>
      <p className="rentals-intro">
        Demonstrating security features for high-value rental items with insurance
        and legal contract protections.
      </p>

      <div className="listings-container">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className={`rental-card slide-up ${
              listing.hasSecurityService ? "secured" : ""
            }`}
            onClick={() => setSelectedListing(listing)}
          >
            <div className="rental-header">
              <h3>{listing.title}</h3>
              {listing.hasSecurityService && (
                <div className="shield-badge" title="Digital agreement required for this insurance-backed rental">
                  <FaShieldAlt className="shield-icon" />
                </div>
              )}
            </div>

            <p className="rental-description">{listing.description}</p>

            <div className="rental-details">
              <div className="detail-item">
                <span className="label">Value:</span>
                <span className="value">${listing.itemValue.toFixed(2)}</span>
              </div>
              <div className="detail-item">
                <span className="label">Daily Rate:</span>
                <span className="value">${listing.dailyRate.toFixed(2)}/day</span>
              </div>
              <div className="detail-item">
                <span className="label">Category:</span>
                <span className="value">{listing.category}</span>
              </div>
            </div>

            {listing.hasSecurityService && (
              <div className="security-features">
                <div className="feature-badge">
                  <FaShieldAlt className="mini-icon" />
                  Insurance Coverage
                </div>
                <div className="feature-badge">
                  <FaShieldAlt className="mini-icon" />
                  Digital Contract Required
                </div>
                <div className="security-cost">
                  Security Service: +${listing.securityServiceCost}/rental
                </div>
              </div>
            )}

            {shouldRecommendSecurity(listing) && (
              <div className="recommendation-banner">
                <FaShieldAlt className="mini-icon" />
                <span>
                  Recommended: Add security service for items over $500
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedListing && (
        <div className="modal-overlay" onClick={() => setSelectedListing(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedListing(null)}
            >
              ×
            </button>

            <h3>{selectedListing.title}</h3>
            <p>{selectedListing.description}</p>

            <div className="modal-details">
              <div className="detail-row">
                <strong>Item Value:</strong> ${selectedListing.itemValue.toFixed(2)}
              </div>
              <div className="detail-row">
                <strong>Daily Rate:</strong> ${selectedListing.dailyRate.toFixed(2)}
              </div>

              {selectedListing.hasSecurityService ? (
                <>
                  <div className="security-info">
                    <h4>
                      <FaShieldAlt className="mini-icon" /> Security Features Active
                    </h4>
                    <ul>
                      <li>✓ Insurance coverage up to ${selectedListing.fairMarketValue.toFixed(2)}</li>
                      <li>✓ Legally binding digital contract</li>
                      <li>✓ Protection against loss or damage</li>
                      <li>✓ Dispute resolution included</li>
                    </ul>
                    <p className="security-fee">
                      Security service fee: ${selectedListing.securityServiceCost}/rental
                    </p>
                  </div>

                  <div className="contract-requirement">
                    <strong>Requirements:</strong>
                    <p>
                      To rent this item, you must digitally sign a rental agreement.
                      Both parties will receive a copy of the signed contract.
                    </p>
                  </div>
                </>
              ) : (
                <div className="no-security-info">
                  {shouldRecommendSecurity(selectedListing) ? (
                    <div className="recommendation-box">
                      <FaShieldAlt className="mini-icon" />
                      <div>
                        <strong>Security Service Recommended</strong>
                        <p>
                          This item is valued over $500. Consider adding insurance
                          and legal contract protection for peace of mind.
                        </p>
                        <p className="estimated-cost">
                          Estimated security service cost: ~$29.99-$49.99/rental
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p>Standard rental - no additional security service required.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
