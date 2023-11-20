import json
import pytest

@pytest.mark.parametrize(
    "user_data, expected_status_code",
    [
        (
                {
                    "login": "test_login1",
                    "password": "test_password1",
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
async def test_create_user_handler(
    client,
    user_data,
    expected_status_code,
):
    response = await client.post("/user/reg",
        data=json.dumps(user_data),
    )
    data_from_response = response.json()
    assert response.status_code == expected_status_code
    assert data_from_response.get('user_id') is not None

@pytest.mark.parametrize(
    "user_data, expected_status_code, expected_data",
    [
        (
                {
                    "login": "test_login1",
                    "password": "test_password1",
                },
                400,
                {
                    "detail": "this login already exists"
                },
        ),
        (
                {
                    "login": "test_login",
                    "password": "test_password2",
                },
                400,
                {
                    "detail": "this login already exists"
                },
        ),
    ]
)
async def test_create_exists_user(
    client,
    user_data,
    expected_status_code,
    expected_data,
):
    await client.post("/user/reg", data=json.dumps(user_data))
    response = await client.post("/user/reg", data=json.dumps(user_data))
    data_from_response = response.json()
    assert response.status_code == expected_status_code
    assert data_from_response == expected_data

@pytest.mark.parametrize(
    "user_data, expected_status_code, expected_data",
    [
        (
                {

                },
                422,
                {'detail': [{'input': {},
                    'loc': ['body', 'login'],
                    'msg': 'Field required',
                    'type': 'missing',
                    'url': 'https://errors.pydantic.dev/2.4/v/missing'},
                    {'input': {},
                    'loc': ['body', 'password'],
                'msg': 'Field required',
                'type': 'missing',
                'url': 'https://errors.pydantic.dev/2.4/v/missing'}]
                 },
        ),
        (
                {
                    "login": "test_login1",
                    "password": "12345",
                },
                422,
                {
                    "detail": "password is too easy"
                },
        ),
(
                {
                    "login": "test",
                    "password": "test_password123",
                },
                422,
                {
                    "detail": "login is too short"
                },
        ),
    ]
)
async def test_create_validation_error(
    client,
    user_data,
    expected_status_code,
    expected_data
):
    response = await client.post("/user/reg", data=json.dumps(user_data))
    data_from_response = response.json()
    assert response.status_code == expected_status_code
    assert data_from_response == expected_data