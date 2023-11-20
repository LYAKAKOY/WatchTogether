# import json
# import settings
# import pytest
#
#
# @pytest.mark.parametrize(
#     "auth_data, expected_status_code",
#     [
#         (
#             {
#                 "username": settings.TEST_LOGIN,
#                 "password": settings.TEST_PASSWORD,
#             },
#             200,
#         ),
#         (
#             {
#                 "username": settings.TEST_LOGIN,
#                 "password": settings.TEST_PASSWORD,
#             },
#             200,
#         ),
#     ],
# )
# async def test_create_token_handler(
#     client,
#     auth_data,
#     expected_status_code,
# ):
#     response = await client.post("/token/login",
#         data=json.dumps({
#             "username": settings.TEST_LOGIN,
#             "password": settings.TEST_PASSWORD
#         }),
#     )
#     data_from_response = response.json()
#     # assert expected_status_code == response.status_code
#     assert 1 == data_from_response