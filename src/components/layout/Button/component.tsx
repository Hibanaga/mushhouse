import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';

// import Spinner from 'components/layout/Spinner';
import StyledComponent from './styles';
import { ButtonElements, ButtonIconTypes, Props } from './types';

const LayoutButton: FunctionComponent<Props> = ({
    children,
    href,
    onClick,
    type,
    element,
    className,
    icon,
    disabled,
    size,
    style,
    styles,
    variant,
    layout,
    loading,
    confirm,
    focus,
    buttonProps,
}) => {
    const router = useRouter();

    const defaultConfirmProps = {
        message: 'Potwierdź swój wybór',
    };

    const onCheckClick = () => {
        if (disabled) {
            return;
        }

        if (confirm?.enabled) {
            const confirmConfig = { ...defaultConfirmProps, ...confirm };

            if (window.confirm(confirmConfig.message)) {
                return onClick && onClick();
            } else {
                return null;
            }
        }

        return onClick && onClick();
    };

    const getIcon = () => {
        if (!icon) return null;

        if (icon.type === ButtonIconTypes.Element) {
            return icon.value || null;
        }

        if (icon.type === ButtonIconTypes.Image) {
            return (
                <img
                    className="button-icon-image"
                    src={icon.value}
                />
            );
        }

        return null;
    };

    const getContent = () => {
        return  <span className="button-content">{children}</span>;
    };

    const getElement = () => {
        const button = (
            <button
                type={type}
                onClick={onCheckClick}
                disabled={disabled}
                className={classnames([
                    'button',
                    focus && 'focused-button',
                ])}
                {...buttonProps}
            >
                {getContent()}
            </button>
        );

        switch (element) {
            case ButtonElements.Anchor:
                if (href?.includes('#')) {
                    return (
                        <a
                            onClick={() => {
                                router.push(href);
                            }}
                            {...buttonProps}
                        >
                            {button}
                        </a>
                    );
                }

                return (
                    <a
                        href={href}
                        {...buttonProps}
                    >
                        {button}
                    </a>
                );
            default:
                return button;
        }
    };

    return (
        <StyledComponent
            className={classnames(
                'layout-button',
                className,
                `element-${element}`,
                `size-${size}`,
                `style-${style}`,
                `variant-${variant}`,
                `layout-${layout}`,
                {
                    disabled,
                },
            )}
            style={styles}
        >
            {getElement()}
        </StyledComponent>
    );
};

export default LayoutButton;
