import json
import pytest

@pytest.mark.parametrize(
    "user_data, expected_status_code",
    [
        (
                {
                    "nickname": "test_nickname",
                },
                200,
        ),
        (
                {
                    "login": "test_login",
                    "password": "test_password2",
                },
                200,
        ),
    ]
)
async def test_update_user_handler(
    client,
    create_test_auth_headers_for_user,
    user_data,
    expected_status_code,
):
    response = await client.put("/user/profile",
        data=json.dumps(user_data),
        headers=create_test_auth_headers_for_user
    )
    data_from_response = response.json()
    assert response.status_code == expected_status_code
    assert data_from_response.get('user_id') is not None