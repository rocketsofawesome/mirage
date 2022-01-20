import React from 'react'
import PropTypes from 'prop-types'
import { Elements } from 'react-stripe-elements'
import styled, { withTheme } from 'styled-components'
import accounting from 'accounting'
import MediaQuery from 'react-responsive';

import {
  H3, H4, ButtonLink, ProgressBar, ProgressBarText,
  PersistentCartProductList, XIcon, PaymentRequestForm,
  CouponCodeWrapper, EmptyCart
} from 'SRC'

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(204, 204, 204, 0.5);
`

const CartSidebarContainer = styled.article`
  background-color: ${props => props.theme.colors.white};
  right: 0px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  position: fixed;
  left: 0;
  right: 0px;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    left: auto;
    width: 45%;
    border-left: 1px solid ${props => props.theme.colors.rocketBlue};
  `}
  ${props => props.theme.breakpointsVerbose.aboveTabletMax`
    width: 35%;
  `}
  ${props => props.theme.breakpointsVerbose.aboveLaptop`
    width: 30%;
  `}
  ${props => props.theme.breakpointsVerbose.aboveDesktop`
    width: 25%;
  `}
`

const CartSidebarHeader = styled.div`
  align-content: center;
  align-items: center;
  justify-content: space-between;
`

const ItemCount = styled.h5`
  text-align: center;
  justify-content: center;
  color: ${props => props.theme.colors.textPrimary};
  letter-spacing: 1px;
  font-weight: 200;
  font-size: 18px;
  font-family: ${props => props.theme.fonts.primaryFont};
  margin: 0 5px;
  display: inline-block;
`

const TitleContainer = styled.div`
  text-align: center;
`

const YourBagTitle = styled(H3)`
  text-align: center;
  margin-top: 0;
  margin-bottom: 1.6rem;
  display: inline-block;
`

const CloseXDiv = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`

const ProgressBarContainer = styled.div`
  text-align: center;
`

const Footer = styled.footer`
  background-color: ${props => props.theme.colors.white};
  margin-top: auto;
  padding: 20px 10px;

  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 365px;
  border-top: 1px solid ${props => props.theme.colors.gray4};
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    left: auto;
    width: 45%;
    border-left: 1px solid ${props => props.theme.colors.rocketBlue};
  `}
  ${props => props.theme.breakpointsVerbose.aboveTabletMax`
    left: auto;
    width: 35%;
  `}
  ${props => props.theme.breakpointsVerbose.aboveLaptop`
    width: 30%;
  `}
  ${props => props.theme.breakpointsVerbose.aboveDesktop`
    width: 25%;
  `}
  }
`

const Total = styled(H4)`
  color: ${props => props.theme.colors.textPrimary};
  letter-spacing: 0.5px;
  font-size: 20px;
  font-family: ${props => props.theme.fonts.headerFont};
  margin-top: 0;
`

const Em = styled.em`
  margin-left: 12px;
  font-style: normal;
`

const PaymentRequestButton = styled(PaymentRequestForm)`
  width: 100%;
`

const CheckoutLink = styled(({ renderLink, children, ...props }) => {
  if (renderLink) {
    return renderLink({...props, children: children})
  } else {
    return (<a {...props}>{children}</a>)
  }
})`
  line-height: 40px;
  display: block;
  vertical-align: middle;
  cursor: pointer;
  color: ${props => props.theme.colors.textPrimary};
  font-size: 14px;
  letter-spacing: 0;
  font-family: ${props => props.theme.fonts.primaryFont};
  text-decoration: underline;
`

const GiftLink = styled(({ renderLink, children, ...props }) => {
  if (renderLink) {
    return renderLink({...props, children: children})
  } else {
    return (<a {...props}>{children}</a>)
  }
})`
  cursor: pointer;
  color: ${props => props.theme.colors.textPrimary};
  font-size: 1.4rem;
  font-family: ${props => props.theme.fonts.primaryFont};
  text-decoration: underline;
`

const Striked = styled.span`
  color: ${props => props.theme.colors.loading};
  text-decoration: line-through;
  margin-right: 5px;
`

const Padding = styled.div`
  padding-top: 13px;
`

const OrderTotal = ({ order }) => {
  let originalAmount = null
  if (parseFloat(order.subtotal) > parseFloat(order.total)) {
    originalAmount = <Striked>{accounting.formatMoney(order.subtotal)}</Striked>
  }

  return (
    <Total>
      TOTAL
      <Em>
        {originalAmount}
        {accounting.formatMoney(order.total)}
      </Em>
    </Total>
  )
}

const CheckoutButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 30px;
`

class BaseCartSidebar extends React.Component {
  constructor (props) {
    super(props)
    this.bag = undefined
  }

  componentDidMount () {
    if (this.props.shouldShowCartSidebar) {
      document.body.style.overflow = 'hidden'
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const { shouldShowCartSidebar, klarnaEnabled } = this.props
    if (prevProps.shouldShowCartSidebar === true && shouldShowCartSidebar === false) {
      document.body.style.overflow = 'inherit'
    } else if (prevProps.shouldShowCartSidebar === false && shouldShowCartSidebar === true) {
      document.body.style.overflow = 'hidden'
      if (klarnaEnabled) {
        const script = document.createElement("script");
        script.async = true;
        script.setAttribute('data-id','UG100247')
        script.setAttribute('data-environment', 'playground')
        script.src = "https://x.klarnacdn.net/express-button/v1/lib.js";
        document.head.appendChild(script);
        window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
        window.KlarnaOnsiteService.push({ eventName: 'refresh-placements' });
      }
    }
  }

  componentWillUnmount () {
    document.body.style.overflow = 'inherit'
  }

  setBag = (element) => {
    this.bag = element
  }

  submitCheckout = async ({ token, ...data }) => {
    return this.props.submitBagCheckoutStripe(this.props.order.id, { token, ...data })
  }

  handleKeepShopping = (breakpoint) => {
    const { hideCartSidebar, scrollKeepShopping } = this.props
    hideCartSidebar()

    if (scrollKeepShopping) {
      scrollKeepShopping(breakpoint)
    }
  }

  render () {
    const {
      appliedPromotion,
      applyPromotion,
      className,
      currentUserEmail,
      evergreenPromoItemCount,
      evergreenPromoPercent,
      finalSaleOn,
      giftFeatureOn,
      hideCartSidebar,
      isUpdatingQuantity,
      isUpdatingSize,
      itemsInBag,
      klarnaEnabled,
      lineItems,
      onClickCheckout,
      onClickPaymentRequestButton,
      onUpdateQuantity,
      onUpdateSize,
      order,
      promoErrorMessage,
      promoHasBeenApplied,
      promotion,
      promotionLoading,
      removeItem,
      removePromotion,
      renderLink,
      renderProductLink,
      segmentCartViewed,
      segmentProductRemoved,
      setShippingAddress,
      setShippingMethod,
      shouldShowCartSidebar,
      subTotal,
      theme
    } = this.props
    if (!shouldShowCartSidebar) return null

    const isCheckoutButtonDisabled = subTotal === 0
    const percentage = Math.min(itemsInBag / evergreenPromoItemCount * 100, 100)

    return (
      <div className={className}>
        <MediaQuery query={theme.breakpoints.belowTabletMax}>
          <Overlay onClick={() => this.handleKeepShopping("belowTabletMax")} />
        </MediaQuery>
        <MediaQuery query={theme.breakpoints.aboveTabletMax}>
          <Overlay onClick={() => this.handleKeepShopping("aboveTabletMax")} />
        </MediaQuery>
        <CartSidebarContainer
          aria-label='Bag' ref={this.setBag}
          tabIndex='-1'>
          <div>
            <CartSidebarHeader>
              <TitleContainer>
                <YourBagTitle>Your bag</YourBagTitle>
                <ItemCount>({itemsInBag} {itemsInBag !== 1 ? 'items' : 'item'})</ItemCount>
              </TitleContainer>
              <MediaQuery query={theme.breakpoints.belowTabletMax}>
                <CloseXDiv onClick={() => this.handleKeepShopping("belowTabletMax")}>
                  <XIcon width='15px' stroke={'#00003C'} />
                </CloseXDiv>
              </MediaQuery>
              <MediaQuery query={theme.breakpoints.aboveTabletMax}>
                <CloseXDiv onClick={() => this.handleKeepShopping("aboveTabletMax")}>
                  <XIcon width='15px' stroke={'#00003C'} />
                </CloseXDiv>
              </MediaQuery>
              <ProgressBarContainer>
                <ProgressBarText
                  order={order}
                  itemsInBag={itemsInBag}
                  evergreenPromoItemCount={evergreenPromoItemCount}
                  evergreenPromoPercent={evergreenPromoPercent}
                />
                <ProgressBar percentage={percentage} />
                <MediaQuery query={theme.breakpoints.belowTabletMax}>
                  <CheckoutLink
                    renderLink={renderLink}
                    onClick={() => this.handleKeepShopping("belowTabletMax")}
                  >
                    KEEP SHOPPING
                  </CheckoutLink>
                </MediaQuery>
                <MediaQuery query={theme.breakpoints.aboveTabletMax}>
                  <CheckoutLink
                    renderLink={renderLink}
                    onClick={() => this.handleKeepShopping("aboveTabletMax")}
                  >
                    KEEP SHOPPING
                  </CheckoutLink>
                </MediaQuery>
              </ProgressBarContainer>
            </CartSidebarHeader>
            {lineItems.length > 0 ?
              <PersistentCartProductList
                lineItems={lineItems}
                hideCartSidebar={hideCartSidebar}
                onUpdateQuantity={onUpdateQuantity}
                onUpdateSize={onUpdateSize}
                removeItem={removeItem}
                renderProductLink={renderProductLink}
                segmentCartViewed={segmentCartViewed}
                segmentProductRemoved={segmentProductRemoved}
                finalSaleOn={finalSaleOn}
                isUpdatingQuantity={isUpdatingQuantity}
                isUpdatingSize={isUpdatingSize}
              />
              :
              <EmptyCart />
            }
          </div>
          <Footer>
            <CouponCodeWrapper
              promotion={promotion}
              loading={promotionLoading}
              promoHasBeenApplied={promoHasBeenApplied}
              errorMessage={promoErrorMessage}
              applyPromotion={applyPromotion}
              removePromotion={removePromotion}
              appliedPromotion={appliedPromotion}
              showBorder={false}
            />
            <OrderTotal order={order} />
            <CheckoutButtonsContainer>
              {klarnaEnabled &&
                <klarna-placement
                  data-key='credit-promotion-badge'
                  data-locale='en-US'
                  data-purchase-amount={10000}
                  style={{paddingLeft: '30px'}}
                ></klarna-placement>
              }
              <ButtonLink
                renderLink={renderLink}
                target='/checkout'
                width='100%'
                kind='blue'
                disabled={isCheckoutButtonDisabled}
                onClick={onClickCheckout}>
                CHECKOUT
              </ButtonLink>
              {parseFloat(order.total) > 0 && <Elements>
                <PaymentRequestButton
                  currentUserEmail={currentUserEmail}
                  order={order}
                  setShippingAddress={setShippingAddress}
                  setShippingMethod={setShippingMethod}
                  submitCheckout={this.submitCheckout}
                  onClickPaymentRequestButton={onClickPaymentRequestButton}
                />
              </Elements>}
              {klarnaEnabled &&
                <klarna-express-button
                  style={{width: '100%'}}
                  data-locale="en-US"
                  data-theme="default"
                />
              }
            </CheckoutButtonsContainer>
            { giftFeatureOn &&
              <Padding>
                <GiftLink target='/checkout?contains_gift=true' renderLink={renderLink}>
                  SEND AS A GIFT
                </GiftLink>
              </Padding>
            }
          </Footer>
        </CartSidebarContainer>
      </div>
    )
  }
}

const renderLink = (inProps) => {
  const {target, children, ...props } = inProps
  return (<a href={target} {...props}>{children}</a>)
}

BaseCartSidebar.propTypes = {
  appliedPromotion: PropTypes.object,
  applyPromotion: PropTypes.func,
  className: PropTypes.string,
  currentUser: PropTypes.number,
  currentUserEmail: PropTypes.string,
  evergreenPromoItemCount: PropTypes.string.isRequired,
  evergreenPromoPercent: PropTypes.string.isRequired,
  finalSaleOn: PropTypes.bool,
  giftFeatureOn: PropTypes.bool,
  hideCartSidebar: PropTypes.func,
  isUpdatingQuantity: PropTypes.number,
  isUpdatingSize: PropTypes.number,
  itemsInBag: PropTypes.number,
  klarnaEnabled: PropTypes.string,
  lineItems: PropTypes.array,
  loadBag: PropTypes.func,
  onUpdateQuantity: PropTypes.func,
  onUpdateSize: PropTypes.func,
  order: PropTypes.object,
  promoErrorMessage: PropTypes.string,
  promoHasBeenApplied: PropTypes.bool,
  promotion: PropTypes.object,
  promotionLoading: PropTypes.bool,
  removeItem: PropTypes.func,
  removePromotion: PropTypes.func,
  renderLink: PropTypes.func,
  renderProductLink: PropTypes.func,
  scrollKeepShopping: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  segmentCartViewed: PropTypes.func,
  segmentProductRemoved: PropTypes.func,
  setShippingAddress: PropTypes.func,
  setShippingMethod: PropTypes.func,
  shouldShowCartSidebar: PropTypes.bool,
  submitBag: PropTypes.func,
  submitBagCheckoutStripe: PropTypes.func,
  subTotal: PropTypes.number
}

BaseCartSidebar.defaultProps = {
  finalSaleOn: false,
  giftFeatureOn: false,
  isUpdatingQuantity: null,
  isUpdatingSize: null,
  klarnaEnabled: null,
  renderLink: renderLink,
  renderProductLink: renderLink,
  scrollKeepShopping: false,
}

const CartSidebar = styled(BaseCartSidebar)`
  width: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 70;
`

/** @component */
export default withTheme(CartSidebar)
