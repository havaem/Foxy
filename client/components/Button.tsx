import { MouseEventHandler } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { BiLoaderAlt } from 'react-icons/bi';

interface Props {
    title?: string;
    size?: 'tiny' | 'small' | 'medium';
    type?: 'primary' | 'secondary';
    Icon?: JSX.Element;
    block?: boolean;
    htmlType?: 'button' | 'submit';
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | SubmitHandler<any>;
    name?: string;
    disabled?: boolean;
    form?: string;
    loading?: boolean;
}

export default function Button({
    className = '',
    onClick,
    title,
    size = 'medium',
    type = 'primary',
    Icon,
    block,
    htmlType = 'button',
    name,
    disabled = false,
    form,
    loading,
}: Props) {
    const sizeClass = () => {
        switch (size) {
            case 'tiny':
                return 'btn-tn';
            case 'small':
                return 'btn-sm';
            case 'medium':
                return 'btn-md';
            default:
                return 'btn-md';
        }
    };
    const typeClass = () => {
        switch (type) {
            case 'primary':
                return 'btn-primary';
            case 'secondary':
                return 'btn-secondary';
            default:
                return 'btn-primary';
        }
    };
    return (
        <button
            type={htmlType}
            className={`${loading ? 'opacity-70' : ''} btn ${className} ${
                block && 'w-full'
            } ${sizeClass()} ${typeClass()}`}
            onClick={onClick}
            name={name}
            disabled={disabled || loading}
            form={form}
        >
            <p className={`${Icon ? '' : 'text-center w-full'}`}>{title}</p>
            {loading ? <BiLoaderAlt className="animate-spin" /> : Icon && Icon}
            {/* {Icon && Icon} */}
        </button>
    );
}
