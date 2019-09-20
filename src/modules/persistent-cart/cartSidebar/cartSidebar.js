import React from 'react'
import PropTypes from 'prop-types'
import { Elements } from 'react-stripe-elements'
import styled from 'styled-components'
import accounting from 'accounting'

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
  color: ${props => props.theme.colors.navy};
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

const FreeShippingDiv = styled.div`
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
    width: 25%;
  `}
  }
`

const Total = styled(H4)`
  color: ${props => props.theme.colors.navy};
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
  max-width: 30rem;
  margin: 0 auto;
  margin-bottom: 20px;
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
  color: ${props => props.theme.colors.navy};
  font-size: 14px;
  letter-spacing: 0;
  font-family: ${props => props.theme.fonts.primaryFont};
  text-decoration: underline;
`

const Striked = styled.span`
  color: ${props => props.theme.colors.loading};
  text-decoration: line-through;
  margin-right: 5px;
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
    const { shouldShowCartSidebar } = this.props
    if (prevProps.shouldShowCartSidebar === true && shouldShowCartSidebar === false) {
      document.body.style.overflow = 'inherit'
    } else if (prevProps.shouldShowCartSidebar === false && shouldShowCartSidebar === true) {
      document.body.style.overflow = 'hidden'
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

  render () {
    const {
      shouldShowCartSidebar,
      className,
      hideCartSidebar,
      subTotal,
      itemsInBag,
      order,
      setShippingAddress,
      renderLink,
      updateBag,
      removeItem,
      segmentCartViewed,
      lineItems,
      promotion,
      promotionLoading,
      promoHasBeenApplied,
      promoErrorMessage,
      applyPromotion,
      removePromotion,
      appliedPromotion,
      renderProductLink,
      currentUserEmail,
      onClickCheckout,
      onClickPaymentRequestButton
    } = this.props
    if (!shouldShowCartSidebar) return null

    const isCheckoutButtonDisabled = subTotal === 0
    const percentage = 100 - (itemsInBag / 4 * 100)

    return (
      <div className={className}>
        <Overlay onClick={hideCartSidebar} />
        <CartSidebarContainer
          aria-label='Bag' ref={this.setBag}
          tabIndex='-1'>
          <div>
            <CartSidebarHeader>
              <TitleContainer>
                <YourBagTitle>Your bag</YourBagTitle>
                <ItemCount>({itemsInBag} {itemsInBag !== 1 ? 'items' : 'item'})</ItemCount>
              </TitleContainer>
              <CloseXDiv onClick={hideCartSidebar}>
                <XIcon width='15px' stroke={'#00003C'} />
              </CloseXDiv>
              <FreeShippingDiv>
                <ProgressBarText
                  order={order}
                  itemsInBag={itemsInBag}
                />
                <ProgressBar percentage={percentage} />
                <CheckoutLink renderLink={renderLink} onClick={hideCartSidebar}>KEEP SHOPPING</CheckoutLink>
              </FreeShippingDiv>
            </CartSidebarHeader>
            {lineItems.length > 0 ?
              <PersistentCartProductList
                lineItems={lineItems}
                hideCartSidebar={hideCartSidebar}
                updateBag={updateBag}
                removeItem={removeItem}
                renderProductLink={renderProductLink}
                segmentCartViewed={segmentCartViewed}
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
            {parseFloat(order.total) > 0 && <Elements>
              <PaymentRequestButton
                currentUserEmail={currentUserEmail}
                order={order}
                setShippingAddress={setShippingAddress}
                submitCheckout={this.submitCheckout}
                onClickPaymentRequestButton={onClickPaymentRequestButton}
              />
            </Elements>}
            <ButtonLink
              renderLink={renderLink}
              target='/checkout'
              width='100%'
              maxWidth='30rem'
              kind='blue'
              disabled={isCheckoutButtonDisabled}
              onClick={onClickCheckout}>
              CHECKOUT
            </ButtonLink>
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
  shouldShowCartSidebar: PropTypes.bool,
  className: PropTypes.string,
  hideCartSidebar: PropTypes.func,
  submitBag: PropTypes.func,
  subTotal: PropTypes.number,
  itemsInBag: PropTypes.number,
  order: PropTypes.object,
  currentUser: PropTypes.number,
  submitBagCheckoutStripe: PropTypes.func,
  loadBag: PropTypes.func,
  setShippingAddress: PropTypes.func,
  renderLink: PropTypes.func,
  updateBag: PropTypes.func,
  removeItem: PropTypes.func,
  segmentCartViewed: PropTypes.func,
  lineItems: PropTypes.array,
  promotion: PropTypes.object,
  promotionLoading: PropTypes.bool,
  promoHasBeenApplied: PropTypes.bool,
  promoErrorMessage: PropTypes.string,
  applyPromotion: PropTypes.func,
  removePromotion: PropTypes.func,
  appliedPromotion: PropTypes.object,
  renderProductLink: PropTypes.func,
  currentUserEmail: PropTypes.string
}

BaseCartSidebar.defaultProps = {
  renderLink: renderLink,
  renderProductLink: renderLink,
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

export default CartSidebar
