from modules import get_user, add_mail_pwd, save_user_db, add_custom_msg, send_email


def main():

    data_base: list = []

    user = get_user()
    user = add_mail_pwd(user)
    option = input("desea guardar el usuario? (si/no):")
    save_user_db(user=user, data_base=data_base, option=option)
    custom_msg: str = input("mensaje para el usuario nuevo: ")
    user = add_custom_msg(user, custom_msg)
    send_email(user)

    print(data_base)


if __name__ == "__main__":
    main()
